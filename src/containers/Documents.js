import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Table, Button, Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import 'moment/locale/cs';
import { withTranslation } from 'react-i18next';

import AddDocument from './AddDocument';
import { getDocuments, deleteDocument, setDocumentsLoading } from '../actions/document';
import fileSize from '../utils/fileSize';

class Documents extends Component {
    static propTypes = {
        getDocuments: PropTypes.func.isRequired,
        setDocumentsLoading: PropTypes.func.isRequired,
        deleteDocument: PropTypes.func.isRequired,
        document: PropTypes.object.isRequired,
        isAdmin: PropTypes.bool,
        t: PropTypes.func.isRequired
    };
    onDeleteClick = (id) => {
        this.props.deleteDocument(id);
    };

    componentDidMount() {
        this.props.setDocumentsLoading();
        this.props.getDocuments();
    }

    render() {
        const { documents, loading } = this.props.document;
        const { isAdmin } = this.props;
        const spinner = <Spinner type="grow" color="secondary" className="m-3" />;
        const t = this.props.t;
        return (
            <Container>
                <h1>{t('Dokumenty')}</h1>
                <AddDocument />
                {loading ? spinner : null}
                <Table>
                    <thead>
                        <tr>
                            <th>{t('název')}</th>
                            <th>{t('datum poslední úpravy')}</th>
                            <th>{t('velikost')}</th>
                            <th className="d-none d-md-table-cell"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map((document) => (
                            <tr key={document._id}>
                                <td>
                                    <a href={document.path}>{document.name}</a>
                                </td>
                                <td>
                                    <Moment format={'dddd D. M. YYYY HH:mm'} locale="cs">
                                        {document.updatedAt}
                                    </Moment>
                                </td>
                                <td>{fileSize(document.size, true)}</td>
                                <td className="d-none d-md-table-cell">
                                    <Button href={document.path} color="primary" className="mb-1" size="sm">
                                        {t('download')}
                                    </Button>{' '}
                                    {isAdmin && (
                                        <Button
                                            color="danger"
                                            className="mb-1"
                                            onClick={this.onDeleteClick.bind(this, document._id)}
                                            size="sm"
                                        >
                                            {t('smazat')}
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    document: state.document,
    isAdmin: state.auth.isAdmin
});

export default connect(mapStateToProps, { getDocuments, deleteDocument, setDocumentsLoading })(
    withTranslation()(Documents)
);