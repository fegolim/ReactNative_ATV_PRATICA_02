import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
export default (param) => {
    console.warn(param)
    return (
        <>
            <Text>
                {'\n'}
                {'\t\t'}
                <Text style={styles.head}>
                    N1:
                </Text>
                <Text style={styles.text}>
                {'\t\t'}{param.um}
                </Text>
                {'\t\t\t\t\t\t\t\t\t'}
                <Text style={styles.head}>
                    N1:
                </Text>
                <Text style={styles.text}>
                {'\t\t'}{param.um1}{'\n'}
                </Text>
                {'\t\t'}
                <Text style={styles.head}>
                    N2:
                </Text>
                <Text style={styles.text}>
                {'\t\t'}{param.dois}
                </Text>
                {'\t\t\t\t\t\t\t\t\t'}
                <Text style={styles.head}>
                    N2:
                </Text>
                <Text style={styles.text}>
                {'\t\t'}{param.dois2}{'\n'}
                </Text>
                {'\t\t'}
                <Text style={styles.head}>
                    N3:
                </Text>
                <Text style={styles.text}>
                {'\t\t'}{param.tres}
                </Text>
                {'\t\t\t\t\t\t\t\t\t'}
                <Text style={styles.head}>
                    N3:
                </Text>
                <Text style={styles.text}>
                {'\t\t'}{param.tres3}{'\n'}
                </Text>
                {'\t\t'}
                <Text style={styles.head}>
                    N4:
                </Text>
                <Text style={styles.text}>
                {'\t\t'}{param.quatro}
                </Text>
                {'\t\t\t\t\t\t\t\t\t'}
                <Text style={styles.head}>
                    N4:
                </Text>
                <Text style={styles.text}>
                {'\t\t'}{param.quatro4}{'\n'}
                </Text>
                <Text style={styles.head}>
                    {'\t\t'}N5:
                </Text>
                <Text style={styles.text}>
                {'\t\t'}{param.cinco}
                </Text>
                {'\t\t\t\t\t\t\t\t\t'}
                <Text style={styles.head}>
                    N5:
                </Text>
                <Text style={styles.text}>
                {'\t\t'}{param.cinco5}{'\n\n'}
                </Text>

                <Text style={styles.text}>
                    {'\t\t'}
                    <Text style={styles.head}>
                        MIN:
                    </Text>
                    <Text style={styles.text}>
                        {'\t\t'}{parseInt(param.min = (Math.min(param.um, param.dois, param.tres, param.quatro, param.cinco)))}
                    </Text>
                    {'\t\t\t\t\t\t\t'}
                    <Text style={styles.head}>
                        MIN2:
                    </Text>
                    <Text style={styles.text}>
                        {'\t\t'}{Math.min(param.um1, param.dois2, param.tres3, param.quatro4, param.cinco5)}{'\n'}
                    </Text>
                    {'\t\t'}
                    <Text style={styles.head}>
                        MAX:
                    </Text>
                    <Text style={styles.text}>
                        {'\t\t'}{Math.max(param.um, param.dois, param.tres, param.quatro, param.cinco)}
                    </Text>
                    {'\t\t\t\t\t\t'}
                    <Text style={styles.head}>
                        MAX2:
                    </Text>
                    <Text style={styles.text}>
                        {'\t\t'}{Math.max(param.um1, param.dois2, param.tres3, param.quatro4, param.cinco5)}
                    </Text>
                    {'\n\n\n'}

                </Text>

            </Text >
            <DataTable style={styles.container}>
                <DataTable.Header>
                    <DataTable.Title textStyle={{ fontSize: 18, fontWeight: 'bold', color: 'darkred', width: 35, alignContent: 'center' }}>N1</DataTable.Title>
                    <DataTable.Title textStyle={{ fontSize: 18, fontWeight: 'bold', color: 'darkred', width: 35, alignContent: 'center' }}>N2</DataTable.Title>
                    <DataTable.Title textStyle={{ fontSize: 18, fontWeight: 'bold', color: 'darkred', width: 35, alignContent: 'center' }}>N3</DataTable.Title>
                    <DataTable.Title textStyle={{ fontSize: 18, fontWeight: 'bold', color: 'darkred', width: 35, alignContent: 'center' }}>N4</DataTable.Title>
                    <DataTable.Title textStyle={{ fontSize: 18, fontWeight: 'bold', color: 'darkred', width: 35, alignContent: 'center' }}>N5</DataTable.Title>
                    <DataTable.Title textStyle={{ fontSize: 18, fontWeight: 'bold', color: 'darkred', width: 80, alignContent: 'center' }}>{'\t'}MIN</DataTable.Title>
                    <DataTable.Title textStyle={{ fontSize: 18, fontWeight: 'bold', color: 'darkred', width: 80, alignContent: 'center' }}>MAX</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell textStyle={{ fontSize: 16, alignContent: 'center', width: 35 }}>{param.um}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 16, alignContent: 'center', width: 35 }}>{param.dois}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 16, alignContent: 'center', width: 35 }}>{param.tres}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 16, alignContent: 'center', width: 35 }}>{param.quatro}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 16, alignContent: 'center', width: 35 }}>{param.cinco}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 16, alignContent: 'space-between', width: 80 }}>{'\t\t'}{param.min}{Math.min(param.um, param.dois, param.tres, param.quatro, param.cinco)}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 16, alignContent: 'space-between', width: 80 }}>{'\t'}{param.max}{Math.max(param.um, param.dois, param.tres, param.quatro, param.cinco)}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell textStyle={{ fontSize: 16, alignContent: 'center', width: 35 }}>{param.um1}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 16, alignContent: 'center', width: 35 }}>{param.dois2}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 16, alignContent: 'center', width: 35 }}>{param.tres3}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 16, alignContent: 'center', width: 35 }}>{param.quatro4}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 16, alignContent: 'center', width: 35 }}>{param.cinco5}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 16, alignContent: 'center', width: 80 }}>{'\t\t'}{param.min1}{Math.min(param.um1, param.dois2, param.tres3, param.quatro4, param.cinco5)}</DataTable.Cell>
                    <DataTable.Cell textStyle={{ fontSize: 16, alignContent: 'center', width: 80 }}>{'\t'}{param.max1}{Math.max(param.um1, param.dois2, param.tres3, param.quatro4, param.cinco5)}</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        </>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'lightblue', borderWidth: 5},
    text: { color: 'black', marginLeft: 5, marginRight: 5, fontSize: 15, fontStyle: 'italic', alignContent: 'space-between' },
    head: { color: 'darkred', marginLeft: 5, marginRight: 5, fontSize: 18, fontWeight: 'bold', alignContent: 'space-between' },
});