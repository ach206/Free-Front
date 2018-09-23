import React from 'react'
import {Container,
        Col,
        Collection,
        CollectionItem,
        Row,
        Icon,
        Input} from 'react-materialize'

const VictimForm = () => (
<section className='footer'>
  <Row>
    <Col s={12}>
      <Container>
        <Row>
          <h4>What Type of Help Do You Need</h4>
          <Row>
            <Input name='EmergencyType' type='radio' label='Request medical' value='medical' />
            <Input name='EmergencyType' type='radio' label='Evacuation Information' value='evacuation' />
            <Input name='EmergencyType' type='radio' label='Request rescue' value='rescue' />
            <Input name='EmergencyType' type='radio' label='Find a shelter' value='shelter'/>
            <Input name='EmergencyType' type='radio' label='Report other emergencies' value='report'/>
          </Row>
          <h4>Type of Medical Request</h4>
          <Row>
          <p>Is the person seeking medical attention breathing?</p>
          <Input name='EmergencyType' type='radio' label='Yes' value='breathing' />
          <Input name='EmergencyType' type='radio' label='No' value='notBreathing' />
          </Row>
          <Row>
          <p>Is the person seeking medical attention conscious?</p>
            <Input name='EmergencyType' type='radio' label='Yes' value='conscious' />
            <Input name='EmergencyType' type='radio' label='No' value='notConcious' />
          </Row>
          <Row>
          <Input s={12} type='select' label="Medical Category" defaultValue='0'>
          <option value="0" disabled selected>Choose your option</option>
          <option value="1">Animal Bites / Attacks</option>
          <option value="1">Auto Accident</option>
          <option value="2">Breathing Problems</option>
          <option value="3">Drowning / Diving Accident</option>
          <option value="6">Pregnancy / Childbirth / Miscarriage</option>
          <option value="5">Psychiatric</option>
          <option value="4">Sick Person</option>
          <option value="6">Unknown or other</option>
          </Input>
          <Row>
              <Input s={6} label="First Name" />
              <Input s={6} label="Last Name" />
              <Input s={12} label="Telephone" validate type='tel' />
              <Input label="Address" s={12} />
              <Input type="textarea" label="Additional" placeholder="Other relevant details" s={12} />
          </Row>
        </Row>
        <h4>Request Rescue</h4>
        <p><b>Tips for rescue:</b> Get to high sturdy structures. If possible, use
          bright colorful objects to identify yourself.
          Make sure your phone ringer volume is loud
          and do your best to conserve your phone battery. </p>
          <Input s={6} label="First Name" />
          <Input s={6} label="Last Name" />
          <Input s={12} label="Telephone" validate type='tel' />
          <Input label="Address" s={12} />
          <Input type="textarea" label="Additional" placeholder="Other relevant details" s={12} />

          <Collection header='Find a Shelter' id="collections">
          <CollectionItem>Hope Hospital 123 Broadway St, New Orleans, Louisiana 02846</CollectionItem>
          <CollectionItem>YMCA 4 Seymour St, New Orleans, Louisiana 02846</CollectionItem>
          <CollectionItem>Valley View Elementary 8 Valley View Rd, New Orleans, Louisiana 02546</CollectionItem>
          <CollectionItem>Ravens Stadium 123 Memorial Dr, New Orleans, Louisiana 02846</CollectionItem>
          </Collection>
          <h4>Report Other Emergencies</h4>
        </Row>
        <Row>
          <Input name=' Report' type='checkbox' value='Fire' label='Fire' className='filled-in' />
          <Input name=' Report' type='checkbox' value='Hazardous Waste' label='Hazardous Waste' className='filled-in'  />
          <Input name=' Report' type='checkbox' value='Vandalism' label='Vandalism' className='filled-in' defaultChecked='checked' />
          <Input name=' Report' type='checkbox' value='Assault' label='Assault' className='filled-in' />
          <Input type="textarea" label="Other" placeholder="Please specify" s={12} />
        </Row>
      </Container>
    </Col>
  </Row>
</section>
)

export default VictimForm
