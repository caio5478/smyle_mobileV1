import { View, Text, Image } from "react-native"
import { styles } from "../styles/header"

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Olá, Caio</Text>
        <Text style={styles.subText}>Como você está se sentindo hoje?</Text>
      </View>
      <Image
        source={{
          uri: "https://i.pravatar.cc/150?img=3",
        }}
        style={styles.profileImage}
      />
    </View>
  )
}

