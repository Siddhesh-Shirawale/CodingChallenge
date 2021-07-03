import React from "react";
import { connect } from "react-redux";
import * as actions from "../redux/company.actions";

const CompanyDetails = (props) => {
   return <div>Company Details</div>;
};

const mapStateToProps = (state) => ({
   companyList: state.company.list,
});

const mapActionToProps = {
   fetchAllCompanies: actions.fetchAll,
};

export default connect(mapActionToProps)(CompanyDetails);
