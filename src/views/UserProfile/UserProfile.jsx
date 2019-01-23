import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import avatar from "assets/img/faces/rodolphe.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function UserProfile(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Rodolphe Darves-Bornoz</h4>
              <p className={classes.description}>
                Créateur de SmartCoin, il a pour ambition d'en faire le token
                qui saura enfin créer une gouvernance technique solide autour
                des securities exchange token pilotés par l'intelligence
                artificielle. Après 4 ICO réussies mais n'ayant pas abouti sur
                un produit concret suite à un manque de soutien des institutions
                financières, sa vision sur le marché est aujourd'hui solide et
                précise.
              </p>
              <Button
                color="primary"
                round
                href="https://twitter.com/SSmartcoin"
              >
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                Le Smartcoin sera t-il intronisé par la DEF ?
              </h4>
              <p className={classes.cardCategoryWhite}>
                Par Steve Bobs - Financial Temporality (23/01/2019 à 16h13)
              </p>
            </CardHeader>
            <CardBody>
              <div className={classes.typo}>
                <p>
                  Cela fait maintenant 9 mois que les investisseurs sont
                  suspendus à la décision de le DEF dans le combat qui oppose
                  Rodolphe Darves-Bornoz, créateur du Smartcoin et le Financial
                  Services Roundtable, le célèbre et puissant lobby financier
                  américain.
                </p>
                <p>
                  L’enjeu ? L’obligation pour les banques américaines - et le
                  reste du monde par conséquent - à accepter les transaction en
                  Smartcoin.
                </p>
                <p>
                  Pour RDB, ceci permettrait d’injecter plusieurs milliards dans
                  l’économie américaine en débloquant ces capitaux qui sont
                  aujourd’hui réservés à des plateformes d’échanges dédiées.
                  Dans ce contexte de crise économique c’est un argument qui ne
                  laisse pas la DEF et la Maison Blanche indifférentes.
                </p>
                <p>
                  Néanmoins cette première n’a eu de cesse de repousser sa
                  décision d’accorder ou non son agrément depuis plusieurs mois,
                  car cet apport de liquidité comporte de sérieux risques selon
                  Malcom Trigger, président du FSR, qui pointe en premier lieu
                  les investissements massifs que devront faire les banques pour
                  mettre en place les process métiers et technique pour
                  accueillir cette nouvelle monnaie.
                </p>
                <p>
                  Mais après un nouveau recul des principaux indices du NYSE et
                  du Nasdaq, la Maison Blanche a sommé le DEF de rendre sa
                  décision avant ce soir minuit.
                </p>
                <p>
                  Si la DEF accorde son agrément, les analyste prévoient une
                  montée du cours du Smartcoin entre 15% et 35 %.
                </p>
                <p>
                  Les négociations devraient donc se poursuivre aujourd’hui
                  jusque tard dans la nuit. Malcom Trigger et son équipe restant
                  sur le pied de guerre à quelques pas des bureaux de la DEF.
                  RDB s’étant lui retiré dans son ranch texan “attendant la
                  décision dans le calme et la sérénité” selon son porte parole.
                </p>
                <p>
                  D’après un proche, il pourrait se rendre au siège de sa
                  société à NYC dans la soirée en cas de décision positive afin
                  de célébrer cette victoire avec ses équipes.
                </p>
                <p>
                  Suivez les développements de cette folle journée avec le
                  #RDBvsFSR
                </p>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(UserProfile);
