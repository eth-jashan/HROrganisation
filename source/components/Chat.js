import React from 'react';

import {View,Text} from 'react-native';

const Chat = (props) => {
    return(
        <View>
            <View style={{flexDirection:'row'}}>
                <Text>{props.item.name}</Text>
                <Text>{props.item.message}</Text>
            </View>
        </View>
    );
};

export default Chat;