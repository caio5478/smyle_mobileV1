import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  seeAll: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  familyCard: {
    backgroundColor: "#F5F6FA",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
  },
  familyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  familyInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  relation: {
    fontSize: 12,
    color: "#FFFFFF",
    opacity: 0.8,
    marginTop: 4,
  },
  statusContainer: {
    marginTop: 8,
  },
  status: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  date: {
    fontSize: 12,
    color: "#FFFFFF",
    opacity: 0.8,
  },
})

