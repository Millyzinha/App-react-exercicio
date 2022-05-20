import React, {useState} from "react"
import { View, Text, TextInput, Button} from 'react-native'

const Temperatura = (props) => {
    console.log(props.title)
    const title = props.title != undefined ? props.title : 'Temperatura em graus Celsius'
    const [fahreinheit, setFahreinheit] = useState(0)
    const [celsius, setCelsius] = useState(0)

    const Converter = () => {
        setFahreinheit(((celsius * 9 /5) ))
    }

    return (
       <View>
           <Text>{title}</Text>
           <Text>{props.title}</Text>

           <TextInput
                placeholder='Celsius'
                value={celsius}
                onChangeText={setCelsius}
           />

            <TextInput
                placeholder='Fahreinheit'
                value={fahreinheit}
                onChangeText={setFahreinheit}
           />

            <Button
                color='black'
                title='Converter'
                onPress={Converter}
                />

       </View>
    )
}

export default Temperatura