import { View, Text } from "react-native"
import { styles } from "../styles/bottomNavigation"

export default function BottomNavigation() {
  const tabs = [
    { icon: "🏠", label: "Início" },
    { icon: "🔍", label: "Buscar" },
    { icon: "📅", label: "Agenda" },
    { icon: "💬", label: "Chat" },
    { icon: "⚙️", label: "Ajustes" },
  ]

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <View key={index} style={styles.tab}>
          <Text style={styles.icon}>{tab.icon}</Text>
          <Text style={styles.label}>{tab.label}</Text>
        </View>
      ))}
    </View>
  )
}

