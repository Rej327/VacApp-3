import { useUser } from "@clerk/clerk-expo";
import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ThemedText } from "../ThemedText";
import { Ionicons } from "@expo/vector-icons";
import Logout from "@/app/LogOut";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OfflineProfileAvatar from "@/app/OfflineProfileAvatar";
import OfflineLogout from "@/app/OfflineLogout";

type CustomDrawerContentProps = {
	navigation: any; // Adjust to match your type
};

const OfflineCustomDrawerContent: React.FC<CustomDrawerContentProps> = ({
	navigation,
}) => {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={["#456B72", "#5b7e8a", "#3B5A64"]}
				style={styles.header}
			>
				<OfflineProfileAvatar />
			</LinearGradient>
			<View style={styles.menuContainer}>
				{/* Home Menu Item */}
				<TouchableOpacity
					style={styles.menuItem}
					onPress={() => navigation.navigate("home")}
				>
					<Ionicons name="home-sharp" size={20} color="#456B72" />
					<ThemedText type="default" style={styles.link}>
						Home
					</ThemedText>
				</TouchableOpacity>
				{/* Profile Menu Item */}
				<TouchableOpacity
					style={styles.menuItem}
					onPress={() => navigation.navigate("profile")}
				>
					<Ionicons name="person-sharp" size={20} color="#456B72" />
					<ThemedText type="default" style={styles.link}>
						Profile
					</ThemedText>
				</TouchableOpacity>

				{/* Logout */}
				<OfflineLogout />
				<View style={styles.footer}>
					<View style={styles.menuItem}>
						<Ionicons
							name="phone-portrait-sharp"
							size={20}
							color="#456B72"
						/>
						<View style={styles.footerText}>
							<ThemedText type="link" style={styles.footerLink}>
								Version 1.0.0
							</ThemedText>
							<ThemedText type="link" style={styles.footerLink}>
								check for update
							</ThemedText>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		height: 300,
		paddingTop: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	profileContainer: {
		alignItems: "center",
	},
	profileImage: {
		width: 60,
		height: 60,
		borderRadius: 50,
		marginBottom: 8,
	},
	userName: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
	menuContainer: {
		position: "relative",
		margin: 16,
		backgroundColor: "#fff",
		flex: 1,
	},
	link: {
		fontSize: 14,
		color: "#456B72",
		marginVertical: 1,
		marginLeft: 5,
	},
	menuItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 12,
	},
	activeMenuItem: {
		backgroundColor: "#d0e3e3", 
		borderRadius: 4,
	},
	footer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
	},
	footerText: {
		marginLeft: 8,
	},
	footerLink: {
		fontSize: 12,
	},
});

export default OfflineCustomDrawerContent;
