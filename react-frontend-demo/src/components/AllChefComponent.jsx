import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { render } from '@testing-library/react';
import ChefService from '../services/ChefService'
const HOST= "http://localhost:8080"



class AllChefComponent extends Component{
  constructor(props) {
      super(props)

      this.state = {
              chefs: []
      }
    }
    componentDidMount(){
      ChefService.getChefs().then((res) => {
          this.setState({ chefs: res.data});
      });
  }

  render() {
           
          return (
                <div className ="card"  >
                  <div className="card-body" style={{maxWidth: 345, height: 140}}>
                    {
                      this.state.chefs.map(
                        chef => 
                          <Card className="cardClass" >
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                className="cardClass"
                                height="140"
                                image={`${HOST}${chef.chefimagename}`}
                                title="Chef Details"
                                key={chef.chefid}
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  {chef.firstname}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  {chef.lastname}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            <CardActions>
                              <Button size="small" color="primary">
                                View Menu
                              </Button>
                              <Button size="small" color="primary">
                               View Contact
                              </Button>
                            </CardActions>
                          </Card>
                      )
                    }
                    </div>
                </div>  
            );
      };

  

}

export default AllChefComponent