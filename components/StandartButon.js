import { StyleSheet, Text, TouchableOpacity } from "react-native"

const StandartButon = ({onPress, title}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:"blue",
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:5,
        alignItems:"center",
       
        marginVertical:5
    },
    btnText:{
        color:"white",
        fontSize:16,
        fontWeight:"bold"

    }
})

export default StandartButon