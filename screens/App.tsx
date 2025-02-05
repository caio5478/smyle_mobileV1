import { SafeAreaView, StatusBar, View } from "react-native"
import Header from "../components/Header"
import QuickActions from "../components/QuickActions"
import FamilySection from "../components/FamilySection"
import IllnessHistory from "../components/IllnessHistory"
import BottomNavigation from "../components/BottomNavigation"
import { styles } from "../styles"
import QuickActionsTwo from "../components/QuickActionsTwo"
import LinearGradient from "react-native-linear-gradient";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Header />
        <QuickActions />
        <QuickActionsTwo />
        <FamilySection />
        <IllnessHistory />
      </View>
    </SafeAreaView>
  )
}

