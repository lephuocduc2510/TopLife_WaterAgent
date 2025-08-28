import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Panel } from 'primereact/panel'

const Home = () => {
  return (
    <div className="grid">
      <div className="col-12">
        <Card title="TopLife WaterAgent Dashboard" className="mb-4">
          <p className="m-0">
            Welcome to TopLife WaterAgent - A comprehensive water management system built with React.js, Vite, and PrimeReact.
          </p>
        </Card>
      </div>
      
      <div className="col-12 md:col-6">
        <Panel header="Quick Stats" className="mb-4">
          <div className="grid">
            <div className="col-6">
              <div className="text-center p-3 border-round-sm bg-blue-100">
                <i className="pi pi-droplet text-blue-500 text-4xl mb-2"></i>
                <div className="text-blue-900 font-medium">Water Quality</div>
                <div className="text-blue-600">Excellent</div>
              </div>
            </div>
            <div className="col-6">
              <div className="text-center p-3 border-round-sm bg-green-100">
                <i className="pi pi-chart-line text-green-500 text-4xl mb-2"></i>
                <div className="text-green-900 font-medium">Usage</div>
                <div className="text-green-600">Normal</div>
              </div>
            </div>
          </div>
        </Panel>
      </div>
      
      <div className="col-12 md:col-6">
        <Panel header="Quick Actions" className="mb-4">
          <div className="flex flex-column gap-2">
            <Button 
              label="View Reports" 
              icon="pi pi-chart-bar" 
              className="p-button-outlined"
            />
            <Button 
              label="Water Analysis" 
              icon="pi pi-search" 
              className="p-button-outlined p-button-success"
            />
            <Button 
              label="Settings" 
              icon="pi pi-cog" 
              className="p-button-outlined p-button-secondary"
            />
          </div>
        </Panel>
      </div>
    </div>
  )
}

export default Home
