import React from 'react';
import {ListItem, ListItemContent} from '../../components/list';
import {FlexList} from '../../components/flexlist/index';
import {IconButton} from '../../components/button';
import Card, {CardActions, CardMedia, CardTitle} from '../../components/card';
const listStyle = {
  border: '1px solid #EEE',
  display: 'inline-block',
  minWidth: 340
};

class ListTest extends React.Component {
  state = {
    checkbox1: false,
    checkbox2: true,
    checkbox3: true
  };

  render () {
    return (
      <section>
        <h5>Flexlist With simple text and icons</h5>
        <p>This list can be used inside a Drawer for a list of options or as navigation.</p>
        <div style={listStyle}>
          <FlexList selectable ripple>
            <ListItem>
              <ListItemContent>
                <Card style={{width: '140px'}}>
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
                <Card style={{width: '140px'}}>
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
        </div>
      </section>
    );
  }
}

export default ListTest;
