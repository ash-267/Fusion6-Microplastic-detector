int frequency; // stores curren status of frequency
int prepercent = 0; // stores the previous status of frequency
float capacitance;
float freq_rms = 0.707;

// if the last status is diffrent than the curent status then we pass it to the node js


void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600); // want to send 9600bits/sec transferred between pc to arduino 
  pinMode(2, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  frequency = digitalRead(2);
  capacitance = (1.44)/(30*frequency);

  if(frequency != prepercent){
    Serial.println("The frequency is: ");
    Serial.println(frequency);
    Serial.println("The RMS value for frequency is: ");
    Serial.println(freq_rms);
    Serial.println("The capacitance is: ");
    Serial.println(capacitance);
    prepercent = frequency;
  }
  delay(100); // we don't want this running as fast as it can
}
