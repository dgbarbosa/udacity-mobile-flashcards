import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import {
    _getDecks,
    _saveDeckTitle
} from './../../../../core/api'

import { Formik } from 'formik'
import { object, string } from 'yup'

function AddDecks({navigateToDeck}) {

    const onSubmit = (values, { resetForm }) => {
        resetForm()
        _saveDeckTitle(values.title).then(res => navigateToDeck(res))
    }

    return(
        <Formik
            initialValues={{
                title: ''
            }}
            onSubmit={onSubmit}
            validationSchema={object().shape({
                title: string().required('Required Field')
            })}
        >
            {({values, errors, touched, handleChange, handleSubmit}) => (
                <View style={style.container}>
                    <View style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={style.title}>What is the title of your new deck?</Text>
                        <TextInput
                        style={style.input}
                        value={values.title}
                        onChangeText={handleChange('title')}
                        />
                        <Text style={{fontWeight: 'bold', color: 'red', marginTop: 10}}>
                            {(errors.title && touched.title) && errors.title}
                        </Text>
                    </View>

                    <TouchableOpacity
                    style={style.submitButton}
                    onPress={handleSubmit}
                    >
                        <Text style={{
                        color: '#FFFFFF',
                        fontWeight: 'bold'
                        }}>Create deck</Text>
                    </TouchableOpacity>

                </View>
            )}
        </Formik>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
        height: '80%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        paddingHorizontal: 10
    },

    submitButton: {
        backgroundColor: '#000000',
        paddingHorizontal: 30,
        paddingVertical: 15
    }
})

export default AddDecks