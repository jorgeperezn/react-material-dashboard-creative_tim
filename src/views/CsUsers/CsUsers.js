import React from "react";

import usersData from "../../data/users.json";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import Avatar from "@material-ui/core/Avatar";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

// @material-ui/icons

// @material-table
import MaterialTable from "material-table";

// @react-router
import { useHistory } from "react-router-dom";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  tableStyle: {
    boxShadow: "none"
  },
  tableCellStyle: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.42857143",
    padding: "12px 8px",
    verticalAlign: "middle",
    fontSize: "0.8125rem"
  },
  tableHeadStyle: {
    color: "inherit",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.42857143",
    fontSize: "1em"
  },
  tableRowStyle: {
    cursor: "pointer"
  }
};

const useStyles = makeStyles(styles);

export default function CsUsers() {
  let history = useHistory();

  const classes = useStyles();

  const [state, setState] = React.useState({
    columns: [
      {
        title: "Photo",
        field: "photo",
        sorting: false,
        // eslint-disable-next-line react/display-name
        render: rowData => (
          <Avatar alt={rowData.firstname} src={rowData.photo} />
        ),
        cellStyle: styles.tableCellStyle
      },
      {
        title: "First name",
        field: "firstname",
        cellStyle: styles.tableCellStyle
      },
      {
        title: "Last name",
        field: "lastname",
        cellStyle: styles.tableCellStyle
      },
      { title: "Area", field: "area", cellStyle: styles.tableCellStyle },
      { title: "Role", field: "role", cellStyle: styles.tableCellStyle },
      { title: "Email", field: "email", cellStyle: styles.tableCellStyle }
    ],
    data: usersData
  });

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Codescrum Users</h4>
            <p className={classes.cardCategoryWhite}>
              This section allows to manage any Codescrumer information.
            </p>
          </CardHeader>
          <CardBody>
            <MaterialTable
              title={<h4>Codescrum Users</h4>}
              columns={state.columns}
              data={state.data}
              onRowClick={(event, rowData) => {
                history.push("/admin/codescrum_user/" + rowData.id);
                // console.log(rowData.firstname);
              }}
              editable={{
                onRowAdd: newData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      setState(prevState => {
                        const data = [...prevState.data];
                        data.push(newData);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        setState(prevState => {
                          const data = [...prevState.data];
                          data[data.indexOf(oldData)] = newData;
                          return { ...prevState, data };
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      setState(prevState => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                      });
                    }, 600);
                  })
              }}
              options={{
                headerStyle: styles.tableHeadStyle,
                rowStyle: styles.tableRowStyle,
                pageSize: 10
              }}
              style={styles.tableStyle}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
