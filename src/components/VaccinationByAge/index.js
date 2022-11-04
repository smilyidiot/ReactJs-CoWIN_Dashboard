import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
// import {VaccineByAgeContainer, VaccineByAgeHeading} from './styledComponents'

import './index.css'

const VaccineByAge = props => {
  const {byAge} = props
  console.log(byAge)

  return (
    <div className="VaccineByAgeContainer">
      <h1 className="VaccineByAgeHeading">Vaccination by Age</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={byAge}
            startAngle={0}
            endAngle={360}
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
export default VaccineByAge
