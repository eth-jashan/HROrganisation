import React from 'react';

import {View,Text} from 'react-native';

const Chat = () => {
    return(
        <View>
            <View style={{flexDirection:'row'}}>
                <Text>{props.name}</Text>
                <Text>{props.message}</Text>
            </View>
        </View>
    );
};

export default Chat;