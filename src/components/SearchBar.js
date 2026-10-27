import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';
import { COLORS, SPACE, RADIUS } from '../styles/token';

export default function SearchBar({
  placeholder = 'Cari entri...',
  onChangeText,
  value,
}) {
  const [internalQuery, setInternalQuery] = useState('');

  // Mendukung Controlled & Uncontrolled component
  const queryText = value !== undefined ? value : internalQuery;

  const handleChange = (text) => {
    if (value === undefined) {
      setInternalQuery(text);
    }
    onChangeText?.(text);
  };

  const handleClear = () => {
    handleChange('');
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.inputContainer}>
        <TextInput
          value={queryText}
          onChangeText={handleChange}
          placeholder={placeholder}
          placeholderTextColor={COLORS.muted || '#9CA3AF'}
          style={styles.input}
          accessibilityLabel="Kolom pencarian"
          returnKeyType="search"
          clearButtonMode="while-editing" // Native iOS clear button
        />

        {queryText.length > 0 && (
          <Pressable
            onPress={handleClear}
            style={styles.clearButton}
            accessibilityLabel="Hapus pencarian"
            accessibilityRole="button"
            hitSlop={8}
          >
            <Text style={styles.clearText}>✕</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: SPACE.l,
    paddingVertical: SPACE.m,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    backgroundColor: '#fff',
    paddingHorizontal: SPACE.m,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    color: COLORS.text || '#000',
  },
  clearButton: {
    paddingLeft: SPACE.s,
  },
  clearText: {
    fontSize: 14,
    color: COLORS.muted || '#9CA3AF',
  },
});