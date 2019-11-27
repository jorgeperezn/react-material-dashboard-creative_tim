import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

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
  }
};

const useStyles = makeStyles(styles);

const csUsers = [
  [
    "Anabel",
    "Guzman",
    "Marketing",
    "Digital Marketing Manager",
    "anabel.guzman@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ],
  [
    "Alejandra",
    "Sandoval",
    "Marketing",
    "Digital Marketing Specialist",
    "alejandra.sandoval@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ],
  [
    "Rumel",
    "Correa",
    "Marketing",
    "Graphic Designer",
    "rumel.correa@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ],
  [
    "Juan",
    "Urrea",
    "Human Resources",
    "Human Talent Engineer",
    "juan.urrea@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ],
  [
    "Juan",
    "Pablo",
    "Development",
    "Product Engineer",
    "jp.amaya@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ],
  [
    "Camilo",
    "Lopez",
    "Development",
    "Product Engineer",
    "camilo.lopez@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ],
  [
    "Sebastian",
    "Benavides",
    "Development",
    "Product Engineer",
    "sebastian.benavides@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ],
  [
    "Jose",
    "Beltran",
    "Development",
    "Product Engineer",
    "jose.beltran@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ],
  [
    "Eduardo",
    "Prado",
    "Development",
    "Product Engineer",
    "eduardo.prado@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ],
  [
    "Santiago",
    "Perez",
    "Development",
    "Product Engineer",
    "santiago.perez@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ],
  [
    "Santiago",
    "Hyun",
    "Development",
    "Product Engineer",
    "santiago.hyun@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ],
  [
    "Julian",
    "Navarro",
    "Development",
    "Product Engineer",
    "julian.navarro@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ],
  [
    "Edwin",
    "Caldon",
    "Development",
    "Product Engineer",
    "edwin.caldon@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ],
  [
    "Jairo",
    "Diaz",
    "Management",
    "Founder & CEO",
    "jairo.diaz@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ],
  [
    "Miguel",
    "Diaz",
    "Management",
    "Technical Director",
    "miguel.diaz@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ],
  [
    "Jorge",
    "Perez",
    "Management",
    "Project Manager",
    "jorge.perez@codescrum.com",
    "https://codescrum.com/images/clients/people/ghost_person_200x200.png"
  ]
];

export default function CsUsers() {
  const classes = useStyles();
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
            <Table
              tableHeaderColor="primary"
              tableHead={[
                "Firstname",
                "Lastname",
                "Area",
                "Role",
                "Email",
                "Photo"
              ]}
              tableData={csUsers}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
