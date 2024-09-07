import { View, Text,Image,ImageSourcePropType} from 'react-native'
import {Tabs} from 'expo-router'
import {icons} from '../../constants';

interface TabIconProps {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}
const TabIcon=({icon,color,name,focused}: TabIconProps) => {
  return(
    <View className="items-center justify-center gap-1">
      <Image 
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className='w-6 h-6'
      />
      <Text className={`${focused?'font-psemibold':'font-pregular'} text-xs`} style={{color:color}}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs
  screenOptions={{
    tabBarShowLabel:false,
    tabBarActiveTintColor:'#FFA001',
    tabBarInactiveTintColor:'#CDCDE0',
    tabBarStyle:{
      backgroundColor:'#197882',
      borderTopWidth:1,
      borderTopColor:'#197882',
      height:84,
    }
  }}
    >
    <Tabs.Screen
    name="inbox"
    options={{
      title: 'Inbox',
      headerShown: false,
      tabBarIcon: ({color,focused})=>(
        <TabIcon 
        icon={icons.group}
        color={color}
        name="Inbox"
        focused={focused}
        />
      )
    }}
    />
    <Tabs.Screen
    name="nearby"
    options={{
      title: 'NearBy',
      headerShown: false,
      tabBarIcon: ({color,focused})=>(
        <TabIcon 
        icon={icons.map}
        color={color}
        name="NearBy"
        focused={focused}
        />
      )
    }}
    />
    <Tabs.Screen
    name="profile"
    options={{
      title: 'Profile',
      headerShown: false,
      tabBarIcon: ({color,focused})=>(
        <TabIcon 
        icon={icons.profile}
        color={color}
        name="Profile"
        focused={focused}
        />
      )
    }}
    />
    <Tabs.Screen
    name="settings"
    options={{
      title: 'Settings',
      headerShown: false,
      tabBarIcon: ({color,focused})=>(
        <TabIcon 
        icon={icons.gear}
        color={color}
        name="Settings"
        focused={focused}
        />
      )
    }}
    />
    </Tabs>
    </>
  )
}

export default TabsLayout