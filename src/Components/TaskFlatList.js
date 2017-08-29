import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Alert,
    ListView
} from 'react-native';
import { connect } from 'react-redux';

class TaskFlatList extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
      }
    render() {
        const { listData } = this.props;
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
            />
        );
    }
}

export default connect(state => {
    return {
        listData: state.data
    }
})(TaskFlatList);