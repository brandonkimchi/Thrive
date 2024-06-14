import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const MessagesScreen = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, sender: 'Pizza Hut', message: 'Your food is on its way.', read: true },
    { id: 2, sender: 'Cold Storage', message: 'Get 20% off on your next order!', read: false },
    { id: 3, sender: 'Plain Vanilla', message: 'New restaurants added. Check them out!', read: false },
  ]);

  const renderNotification = ({ item }) => (
    <TouchableOpacity style={styles.notificationContainer}>
      <View style={[styles.statusContainer, { backgroundColor: item.read ? '#333' : '#7E7BFF' }]}>
        <Text style={styles.statusText}>{item.read ? 'Read' : 'Unread'}</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={notifications}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderNotification}
    />
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  statusContainer: {
    marginRight: 10,
    backgroundColor: '#333',
    padding: 5,
    borderRadius: 5,
  },
  statusText: {
    color: '#fff',
  },
  messageContainer: {
    flex: 1,
  },
  sender: {
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
    color: '#666',
  },
});

export default MessagesScreen;
