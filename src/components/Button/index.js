import React from 'react'
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

function Button (props) {
    const {
            label,
            onPress,
            outlined,
        } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                outlined
                ? buttonStyle.buttonOutlined
                : buttonStyle.buttonDefault,
                buttonStyle.button,
                props.style && {...props.style}
            ]}
        >
            <Text
                style={
                    outlined
                    ? buttonStyle.labelOutlined
                    : buttonStyle.labelDefault
            }>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const buttonStyle = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 16
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonDefault: {
        backgroundColor: '#000000',
    },
    labelDefault: {
        color: '#FFFFFF'
    },
    buttonOutlined: {
        borderColor: '#000000',
        borderWidth: 1
    },
    labelOutlined: {
        color: '#000000'
    }
})

export default Button