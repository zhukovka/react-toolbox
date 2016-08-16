import React from 'react';
import Button, {IconButton} from '../../components/button';
import BottomSheet from '../../components/bottomsheet';
import Card, {CardActions, CardMedia, CardTitle} from '../../components/card';
import {ListItem, ListItemContent} from '../../components/list';
import {FlexList} from '../../components/flexlist/index';
class BottomSheetTest extends React.Component {
  state = {
    active: true
  };

  handleClick = () => {
    this.setState({active: true});
  };

  render () {
    return (
      <section>
        <h5>BottomSheets</h5>
        <p>lorem ipsum...</p>
        <Button label='Show bottom' primary raised onClick={this.handleClick}/>
        <BottomSheet
          active={this.state.active}>

          <FlexList align="space-around">
            <ListItem>
              <ListItemContent>
                <Card>
                  <CardMedia
                    aspectRatio="square"
                    image="https://placeimg.com/200/200/nature">
                    <CardTitle>Kukuruku</CardTitle>
                  </CardMedia>
                  <CardActions style={{justifyContent: 'center'}}>
                    <IconButton icon="thumb_down"/>
                    <IconButton icon="thumb_up"/>
                    <IconButton icon="turned_in_not"/>
                  </CardActions>
                </Card>
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent>
                <Card>
                  <CardMedia
                    aspectRatio="square"
                    image="https://placeimg.com/200/200/nature">
                    <CardTitle>Test</CardTitle>
                  </CardMedia>
                  <CardActions style={{justifyContent: 'center'}}>
                    <IconButton icon="thumb_down"/>
                    <IconButton icon="thumb_up"/>
                    <IconButton icon="turned_in_not"/>
                  </CardActions>
                </Card>
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent>
                <Card>
                  <CardMedia
                    aspectRatio="square"
                    image="https://placeimg.com/200/200/nature">
                    <CardTitle>Test</CardTitle>
                  </CardMedia>
                  <CardActions style={{justifyContent: 'center'}}>
                    <IconButton icon="thumb_down"/>
                    <IconButton icon="thumb_up"/>
                    <IconButton icon="turned_in_not"/>
                  </CardActions>
                </Card>
              </ListItemContent>
            </ListItem>
          </FlexList>

        </BottomSheet>
      </section>
    );
  }
}

export default BottomSheetTest;
