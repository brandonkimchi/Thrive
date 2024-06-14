import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

type Message = {
  id: string;
  name: string;
  message: string;
  time: string;
  new: boolean;
};

const messages: Message[] = [
  { id: '1', name: 'Vernice', message: 'Hi, can I please change my order...', time: '1:55pm', new: true },
  { id: '2', name: 'Brandon', message: 'Hi, is it possible to package the...', time: '20 May', new: false },
];

const MessageItem = ({ item }: { item: Message }) => {
  return (
    <View style={styles.messageItem}>
      <View style={styles.messageContent}>
        <View style={styles.avatar} />
        <View style={styles.messageText}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.preview}>{item.message}</Text>
        </View>
      </View>
      <View style={styles.messageMeta}>
        <Text style={styles.time}>{item.time}</Text>
        {item.new && <View style={styles.newIndicator} />}
      </View>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  messageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  messageContent: {
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 20,
  },
  messageText: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  preview: {
    color: '#666',
  },
  messageMeta: {
    alignItems: 'flex-end',
  },
  time: {
    color: '#666',
  },
  newIndicator: {
    width: 8,
    height: 8,
    backgroundColor: 'green',
    borderRadius: 4,
    marginTop: 4,
  },
});

