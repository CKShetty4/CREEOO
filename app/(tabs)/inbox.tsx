// import { View, Text } from 'react-native'
// import React from 'react'

// const Inbox = () => {
//   return (
//     <View className='bg-primary-100 h-full items-center justify-center'>
//       <Text className='text-3xl font-HowdyParty'>Inbox</Text>
//       <Text className='text-3xl font-Love'>Inbox</Text>
//       <Text className='text-5xl font-RogshireDemo'>Inbox</Text>
//     </View>
//   )
// }

// export default Inbox

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Inbox = () => {
  const [activeTab, setActiveTab] = useState('requests');

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'requests' && styles.activeTab]}
          onPress={() => handleTabPress('requests')}
        >
          <Text style={styles.tabText}>Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'inbox' && styles.activeTab]}
          onPress={() => handleTabPress('inbox')}
        >
          <Text style={styles.tabText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'friends' && styles.activeTab]}
          onPress={() => handleTabPress('friends')}
        >
          <Text style={styles.tabText}>Friends</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {activeTab === 'requests' && (
          <ScrollView style={styles.scroll}>
            {/* Content for Requests */}
            <Text style={styles.item}>Request 1</Text>
            <Text style={styles.item}>Request 2</Text>
            <Text style={styles.item}>Request 3</Text>
            {/* ... more requests */}
          </ScrollView>
        )}
        {activeTab === 'inbox' && (
          <ScrollView style={styles.scroll}>
            {/* Content for Inbox */}
            <Text style={styles.item}>Message 1</Text>
            <Text style={styles.item}>Message 2</Text>
            <Text style={styles.item}>Message 3</Text>
            {/* ... more messages */}
          </ScrollView>
        )}
        {activeTab === 'friends' && (
          <ScrollView style={styles.scroll}>
            {/* Content for Friends */}
            <Text style={styles.item}>Friend 1</Text>
            <Text style={styles.item}>Friend 2</Text>
            <Text style={styles.item}>Friend 3</Text>
            {/* ... more friends */}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeTab: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  tabText: {
    color: '#333',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  scroll: {
    flex: 1,
  },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
});

export default Inbox;