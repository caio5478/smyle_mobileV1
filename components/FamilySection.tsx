import { View, Text, Image } from "react-native"
import { styles } from "../styles/familySection"

export default function FamilySection() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nossa Localização</Text>
      </View>
      <View style={styles.familyCard}>
        <View style={styles.familyInfo}>
          <Text style={styles.name}></Text>
          <Text style={styles.relation}></Text>
          <View style={styles.statusContainer}>
            <Text style={styles.status}></Text>
            <Text style={styles.date}></Text>
          </View>
        </View>
      </View>
    </View>
  )
}

