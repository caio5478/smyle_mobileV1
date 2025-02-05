import { View, Text } from "react-native"
import { styles } from "../styles/quickActionsTwo"
import Icon from 'react-native-vector-icons/AntDesign'

export default function QuickActionsTwo() {
  const actions = [
    { icon: "shoppingcart", title: "Serviços" },
    { icon: "creditcard", title: "Pagamentos" },
    { icon: "setting", title: "Painel" },
    
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
