import * as React from 'react';
import { block } from 'bem-cn';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Singleton from '../../patterns/Creational/Singleton';

const b = block('measurement');


const useStyles = makeStyles({
  card: {
    maxWidth: '320px',
    backgroundColor: '#cfe8fc'
  },
  title: {
    fontWeight: 700,
    marginBottom: '30px',
  },
  input: {
    margin: '10px'
  }
});

const Measurement = () => {
  const [_, forceUpdate] = React.useReducer(x => x + 1, 0);
  const classes = useStyles({});
  const inputs = [
    {
      name: 'kg',
      value: Singleton.getValue({ measure: 'kg' }),
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => { Singleton.setValue({ measure: 'kg', value: event.target.value }); forceUpdate(); },
      placeholder: "килограмм",
    },
    {
      name: 'berkovets',
      value: Singleton.getValue({ measure: 'berkovets' }),
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => { Singleton.setValue({ measure: 'berkovets', value: event.target.value }); forceUpdate(); },
      placeholder: "берковец",
    },
    {
      name: 'pood',
      value: Singleton.getValue({ measure: 'pood' }),
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => { Singleton.setValue({ measure: 'pood', value: event.target.value }); forceUpdate(); },
      placeholder: "пуд",
    },
    {
      name: 'lot',
      value: Singleton.getValue({ measure: 'lot' }),
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => { Singleton.setValue({ measure: 'lot', value: event.target.value }); forceUpdate(); },
      placeholder: "лот",
    },
    {
      name: 'spool',
      value: Singleton.getValue({ measure: 'spool' }),
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => { Singleton.setValue({ measure: 'spool', value: event.target.value }); forceUpdate(); },
      placeholder: "золотник",
    },
  ]

  return (
    <form name="measurement" >
      <div className={b()}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Меры измерения на древней Руси
            </Typography>
            {inputs.map((input, index) => {
              const { name, value, onChange, placeholder } = input;
              return (
                <div key={index} className={classes.input}>
                  <TextField
                    name={name}
                    value={value}
                    onChange={onChange}
                    label={placeholder}
                    variant="outlined"
                  />
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>
    </form>
  )
}

export default Measurement