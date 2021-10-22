import React from 'react';
import { StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface StarProps {
    filled: boolean
}

const Star = ({
    filled
}: StarProps) => {
    return (
        <AntDesign
            name={filled ? 'star' : 'staro'}
            color="#7F00FF"
            size={35}
        />
    );
}

export default Star

const styles = StyleSheet.create({})