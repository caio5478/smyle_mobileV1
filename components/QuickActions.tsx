import { View, Text } from "react-native"
import { styles } from "../styles/quickActions"
import Icon from 'react-native-vector-icons/AntDesign'

export default function QuickActions() {
  const actions = [
    { icon: "book", title: "Agenda" },
    { icon: "pushpino", title: "Marcação" },
    { icon: "barschart", title: "Dashboard" },
  ]

  return (
    <View style={styles.container}>
      {actions.map((action, index) => (
        <View key={index} style={styles.actionItem}>
          <Icon name={action.icon} size={30} color="#407AE5" style={styles.icon} />
          <Text style={styles.actionText}>{action.title}</Text> {/* Exibindo o título da ação */}
        </View>
      ))}
    </View>
  )
}
