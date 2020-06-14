import React, { useState, useEffect } from 'react'
import Button from './../../components/Button'
import { _addCardToDeck } from './../../core/api'
import {
    View,
    TextInput,
    StyleSheet,
    Text
} from 'react-native'

import { Formik } from 'formik'
import { object, string } from 'yup'

function AddCard ({route}) {

    const [deck, setDeck] = useState()
    
    useEffect(() => {
        if(route.params?.deck) setDeck(route.params.deck)
    },[route.params?.deck])

    const onSubmit = (values, { resetForm }) => {
        _addCardToDeck(deck.id, values)
        resetForm({})
    }
    return (
        <Formik
            initialValues={{
                question: '',
                answer: ''
            }}
            onSubmit={onSubmit}
            validationSchema={object().shape({
                question: string().required('Required Field'),
                answer: string().required('Required Field')
            })}
        >
            {({values, errors, touched, handleChange, handleSubmit}) => (
                <View style={style.container}>
                    <TextInput
                        style={style.input}
                        placeholder='Question'
                        onChangeText={handleChange('question')}
                        value={values.question}
                    />
                    <Text style={style.errorMessage}>
                        {(errors.question && touched.question) && errors.question}
                    </Text>

                    <TextInput
                        style={style.input}
                        placeholder='Answer'
                        onChangeText={handleChange('answer')}
                        value={values.answer}
                    />
                    <Text style={style.errorMessage}>
                        {(errors.answer && touched.answer) && errors.answer}
                    </Text>

                    <Button
                        label='Save Card'
                        style={{marginTop: 30}}
                        onPress={handleSubmit}
                    />
                </View>
            )}
        </Formik>
    )
}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    input: {
        borderWidth: 1,
        height: 40,
        width: '80%',
        marginVertical: 10,
        paddingHorizontal: 10
    },
    errorMessage: {
        color: 'red',
        fontWeight: 'bold'
    }
})

export default AddCard