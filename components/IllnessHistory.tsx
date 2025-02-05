import { View, Text } from "react-native"
import { styles } from "../styles/illnessHistory"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function IllnessHistory() {
  const history = [
    {
      title: "Dor de dente, visita presencial",
      date: "21/06/2022",
      icon: "🦷",
    },
    {
      title: "Dor de dente, visita presencial",
      date: "03/03/2022",
      icon: "🦷",
    },
    {
      title: "Dor de dente, visita presencial",
      date: "06/02/2022",
      icon: "🦷",
    },
    
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Histórico de Consultas</Text>
        <Text style={styles.seeAll}>Ver todos</Text>
      </View>
      {history.map((item, index) => (
        <View key={index} style={styles.historyItem}>
          <Text style={styles.icon}>{item.icon}</Text>
          <View style={styles.itemInfo}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

