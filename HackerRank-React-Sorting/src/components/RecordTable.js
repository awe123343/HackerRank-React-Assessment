import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class RecordTable extends Component {
    constructor(props) {
        super(props);
        this.people = [
            {
                name: 'Veronica Mize',
                dob: '11/29/2011',
            },
            {
                name: 'Cecilia Olsson',
                dob: '09/16/1992',
            },
            {
                name: 'Peter Parker',
                dob: '01/16/1992',
            },
            {
                name: 'Jimmy Shergil',
                dob: '12/12/2001',
            },
            {
                name: 'Alexander Alfred',
                dob: '02/09/1891',
            },
            {
                name: 'Janice Shroyer',
                dob: '12/01/1982',
            },
            {
                name: 'Ralph White',
                dob: '11/30/2011',
            },
            {
                name: 'Deborah T. Decker',
                dob: '10/31/1999',
            },
        ];
    }

    render() {
        const { sortedBy } = this.props;
        if (sortedBy === 'name') {
            this.people.sort((a, b) => {
                const personA = a.name.toLowerCase();
                const personB = b.name.toLowerCase();
                return personA.localeCompare(personB);
            });
        } else {
            this.people.sort((a, b) => {
                return new Date(a.dob) - new Date(b.dob);
            });
        }

        return (
            <Paper className="width">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">
                                Date of Birth
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.people.map((person) => (
                            <TableRow key={person.name}>
                                <TableCell component="th" scope="row">
                                    {person.name}
                                </TableCell>
                                <TableCell align="right">
                                    {person.dob}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default RecordTable;
