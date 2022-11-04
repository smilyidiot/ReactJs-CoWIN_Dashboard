// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

// import {
//   CowinDashBoardContainer,
//   LoaderContainer,
//   RowWrapper,
//   WebsiteLogo,
//   WebsiteName,
//   CowinDashBoardHeading,
//   FailureContainer,
//   FailureImage,
//   FailureHeading,
// } from './styledComponents'

import './index.css'

class CowinDashBoard extends Component {
  state = {status: 'INITIAL', detailsList: {}}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    // const token = Cookies.get('jwt_token')
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }

    this.setState({status: 'INPROGRESS'})
    const covidVaccinationDataApiUrl =
      'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(covidVaccinationDataApiUrl)

    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      const convertedData = {
        coverage: data.last_7_days_vaccination,
        byAge: data.vaccination_by_age,
        byGender: data.vaccination_by_gender,
      }
      const {coverage} = convertedData
      const newCoverageData = coverage.map(each => ({
        vaccineDate: each.vaccine_date,
        dose1: each.dose_1,
        dose2: each.dose_2,
      }))
      convertedData.coverage = [...newCoverageData]
      this.setState({status: 'SUCCESS', detailsList: convertedData})
    } else {
      this.setState({status: 'FAILURE', detailsList: ''})
    }
  }

  renderLoadingView = () => (
    <div className="LoaderContainer" testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="FailureContainer">
      <img
        className="FailureImage"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="FailureHeading">Something went wrong</h1>
    </div>
  )

  renderSuccessView = () => {
    const {detailsList} = this.state
    const {coverage, byAge, byGender} = detailsList
    return (
      <>
        <VaccinationCoverage content={coverage} />
        <VaccinationByGender byGender={byGender} />
        <VaccinationByAge byAge={byAge} />
      </>
    )
  }

  showWebsiteDetails = () => {
    const {status} = this.state

    switch (status) {
      case 'SUCCESS':
        return this.renderSuccessView()
      case 'FAILURE':
        return this.renderFailureView()
      case 'INPROGRESS':
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="CowinDashBoardContainer">
        <div className="RowWrapper">
          <img
            className="WebsiteLogo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1 className="WebsiteName">Co-WIN</h1>
        </div>
        <h1 className="CowinDashBoardHeading">CoWIN Vaccination in India</h1>
        {this.showWebsiteDetails()}
      </div>
    )
  }
}

export default CowinDashBoard
