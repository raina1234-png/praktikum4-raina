import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';
import { COLORS, SPACE, RADIUS, TYPO } from '../styles/token';

export default function EntryForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('2026-10-19');
  const [preview, setPreview] = useState('');

  const canSubmit = title.trim().length > 0 && preview.trim().length > 0;

  const submit = () => {
    if (!canSubmit) return;

    onSubmit?.({
      id: Date.now(),
      title: title.trim(),
      date: date.trim(),
      preview: preview.trim(),
      body: preview.trim(),
      moodImage: require('../../assets/moods/DaintyDaydream.jpg'),
    });

    setTitle('');
    setDate('2026-10-19');
    setPreview('');
  };

  return (
    <View style={styles.form}>
      <Text style={styles.heading}>Tambah Entri</Text>

      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Judul"
        placeholderTextColor={COLORS.muted || '#9CA3AF'}
        style={styles.input}
      />

      <TextInput
        value={date}
        onChangeText={setDate}
        placeholder="YYYY-MM-DD"
        placeholderTextColor={COLORS.muted || '#9CA3AF'}
        style={styles.input}
      />

      <TextInput
        value={preview}
        onChangeText={setPreview}
        placeholder="Ringkasan..."
        placeholderTextColor={COLORS.muted || '#9CA3AF'}
        style={[styles.input, styles.multiline]}
        multiline
      />

      <Pressable
        onPress={submit}
        disabled={!canSubmit}
        accessibilityRole="button"
        accessibilityState={{ disabled: !canSubmit }}
        style={({ pressed }) => [
          styles.button,
          !canSubmit && styles.buttonDisabled,
          pressed && canSubmit && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Simpan</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: SPACE.l,
    gap: SPACE.s,
  },
  heading: {
    fontSize: TYPO.title,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACE.s,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    paddingHorizontal: SPACE.m,
    paddingVertical: 10,
    backgroundColor: '#fff',
    color: COLORS.text || '#000',
  },
  multiline: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  button: {
    marginTop: SPACE.s,
    padding: SPACE.m,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});