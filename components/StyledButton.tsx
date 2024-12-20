import React, { forwardRef, useState } from "react";
import { View, Text, Pressable, StyleSheet, ActivityIndicator } from "react-native";

type ButtonProps = {
	title: string;
	onPress: () => void;
	style?: object;
	loading?: boolean;
	bgColor?: string;
	width?: string;
	textColor?: string;
	fontSize?: number;
	borderRadius?: number;
	customWeight?:
		| "normal"
		| "bold"
		| "100"
		| "200"
		| "300"
		| "400"
		| "500"
		| "600"
		| "700"
		| "800"
		| "900";
	paddingVertical?: number;
};

// Using forwardRef with 'React.Ref<View>' to pass the ref to the underlying View component
const StyledButton = forwardRef<React.Ref<View>, ButtonProps>(
	(
		{
			title,
			onPress,
			loading = false,
			style,
			bgColor = "#456B72",
			textColor = "#fff",
			customWeight = "700",
			width = "",
			fontSize = 17,
			borderRadius = 20,
			paddingVertical = 12,
		},
		ref
	) => {
		// Use state to manage press effect
		const [isPressed, setIsPressed] = useState(false);

		return (
			<Pressable
				onPressIn={() => setIsPressed(true)} // Press effect starts
				onPressOut={() => setIsPressed(false)} // Press effect ends
				onPress={loading ? undefined : onPress} // Disable onPress when loading
				disabled={loading} // Disable button when loading
				style={({ pressed }) => [
					styles.button,
					{
						backgroundColor: bgColor,
						width: width,
						borderRadius: borderRadius,
						opacity: pressed ? 0.8 : 1, // Reduce opacity when pressed
						transform: [{ scale: pressed ? 0.98 : 1 }], // Slight scale-down effect
					},
          loading ? styles.disabledButton : null,
					style,
				]}
				ref={ref as any} // Pass ref to Pressable, which ultimately forwards to View
			>
				{loading ? (
					<ActivityIndicator size="small" color="#fff" />
				) : (
					<Text
						style={[
							styles.text,
							{
								color: textColor,
								fontSize: fontSize,
								fontWeight: customWeight,
								paddingVertical: paddingVertical,
							},
						]}
					>
						{title}
					</Text>
				)}
			</Pressable>
		);
	}
);

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 20,
		alignItems: "center",
		borderColor: "#456B72",
		borderWidth: 1,
		justifyContent: "center",
		marginVertical: 2,
	},
  disabledButton: {
		opacity: 0.7, // Optional styling for when the button is loading
    paddingVertical: 9,
    borderRadius: 12,
	},
	// buttonText: {
	// 	color: '#fff',
	// 	textAlign: 'center',
	// },
	text: {},
});

// Give the component a display name for better debugging
StyledButton.displayName = "StyledButton";

export default StyledButton;
