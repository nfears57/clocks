import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [time, setTime] = useState(new Date());
  const [timezone, setTimezone] = useState('America/New_York');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value);
  };

  const timezoneOptions = [
    { value: 'Pacific/Midway', label: 'Midway Island' },
    { value: 'Pacific/Honolulu', label: 'Hawaii' },
    { value: 'Pacific/Pago_Pago', label: 'Pago Pago' },
    { value: 'America/Anchorage', label: 'Anchorage' },
    { value: 'America/Los_Angeles', label: 'Los Angeles' },
    { value: 'America/Denver', label: 'Denver' },
    { value: 'America/Chicago', label: 'Chicago' },
    { value: 'America/New_York', label: 'New York' },
    { value: 'America/Halifax', label: 'Halifax' },
    { value: 'America/Argentina/Buenos_Aires', label: 'Buenos Aires' },
    { value: 'America/Montevideo', label: 'Montevideo' },
    { value: 'America/Sao_Paulo', label: 'Sao Paulo' },
    { value: 'Atlantic/Cape_Verde', label: 'Cape Verde' },
    { value: 'Africa/Casablanca', label: 'Casablanca' },
    { value: 'Europe/London', label: 'London' },
    { value: 'Europe/Paris', label: 'Paris' },
    { value: 'Europe/Istanbul', label: 'Istanbul' },
    { value: 'Europe/Moscow', label: 'Moscow' },
    { value: 'Asia/Dubai', label: 'Dubai' },
    { value: 'Asia/Kolkata', label: 'Mumbai' },
    { value: 'Asia/Dhaka', label: 'Dhaka' },
    { value: 'Asia/Bangkok', label: 'Bangkok' },
    { value: 'Asia/Shanghai', label: 'Shanghai' },
    { value: 'Asia/Tokyo', label: 'Tokyo' },
    { value: 'Australia/Sydney', label: 'Sydney' },
    { value: 'Pacific/Auckland', label: 'Auckland' },
  ];

  let offset = 0;
  switch (timezone) {
    case 'CST':
      offset = -6;
      break;
    case 'MST':
      offset = -7;
      break;
    case 'PST':
      offset = -8;
      break;
    case 'America/New_York':
      offset = -5;
      break;
    case 'America/Chicago':
      offset = -6;
      break;
    case 'America/Denver':
      offset = -7;
      break;
    case 'America/Los_Angeles':
      offset = -8;
      break;
    case 'America/Anchorage':
      offset = -9;
      break;
    case 'Pacific/Honolulu':
      offset = -10;
      break;
    case 'America/Adak':
      offset = -10;
      break;
    case 'Pacific/Midway':
      offset = -11;
      break;
    case 'Pacific/Guam':
      offset = 10;
      break;
    case 'Asia/Tokyo':
      offset = 9;
      break;
    case 'Australia/Sydney':
      offset = 11;
      break;
    case 'Europe/London':
      offset = 0;
      break;
    case 'Europe/Paris':
      offset = 1;
      break;
    case 'Europe/Moscow':
      offset = 3;
      break;
    case 'Asia/Dubai':
      offset = 4;
      break;
    case 'Asia/Kolkata':
      offset = 5.5;
      break;
    case 'Asia/Shanghai':
      offset = 8;
      break;
    case 'Asia/Bangkok':
      offset = 7;
      break;
    case 'Asia/Singapore':
      offset = 8;
      break;
    case 'America/Argentina/Buenos_Aires':
      offset = -3;
      break;
    case 'America/Santiago':
      offset = -4;
      break;
    case 'Africa/Johannesburg':
      offset = 2;
      break;
    default:
      offset = 0;
      break;
  }

  const utcTime = time.getTime() + time.getTimezoneOffset() * 60000;
  const timezoneTime = new Date(utcTime + 3600000 * offset);
  const hours = timezoneTime.getHours().toString().padStart(2, '0');
  const minutes = timezoneTime.getMinutes().toString().padStart(2, '0');
  const seconds = timezoneTime.getSeconds().toString().padStart(2, '0');

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="time">
          {hours}:{minutes}:{seconds}
        </div>
        <div className="timezone">{timezone}</div>
      </div>
      <select value={timezone} onChange={handleTimezoneChange}>
        <option value="CST">Central Time (US & Canada)</option>
        <option value="MST">Mountain Time (US & Canada)</option>
        <option value="PST">Pacific Time (US & Canada)</option>
        <option value="America/New_York">America/New York</option>
        <option value="America/Chicago">America/Chicago</option>
        <option value="America/Denver">America/Denver</option>
        <option value="America/Los_Angeles">America/Los Angeles</option>
        <option value="Africa/Abidjan">Africa/Abidjan</option>
        <option value="Africa/Accra">Africa/Accra</option>
        <option value="Africa/Algiers">Africa/Algiers</option>
        <option value="Africa/Bissau">Africa/Bissau</option>
        <option value="Africa/Cairo">Africa/Cairo</option>
        <option value="Africa/Casablanca">Africa/Casablanca</option>
        <option value="Africa/Ceuta">Africa/Ceuta</option>
        <option value="Africa/El_Aaiun">Africa/El_Aaiun</option>
        <option value="Africa/Johannesburg">Africa/Johannesburg</option>
        <option value="Africa/Juba">Africa/Juba</option>
        <option value="Africa/Khartoum">Africa/Khartoum</option>
        <option value="Africa/Lagos">Africa/Lagos</option>
        <option value="Africa/Maputo">Africa/Maputo</option>
        <option value="Africa/Monrovia">Africa/Monrovia</option>
        <option value="Africa/Nairobi">Africa/Nairobi</option>
        <option value="Africa/Ndjamena">Africa/Ndjamena</option>
        <option value="Africa/Tripoli">Africa/Tripoli</option>
        <option value="Africa/Tunis">Africa/Tunis</option>
        <option value="Africa/Windhoek">Africa/Windhoek</option>
        <option value="America/Adak">America/Adak</option>
        <option value="America/Anchorage">America/Anchorage</option>
        <option value="America/Anguilla">America/Anguilla</option>
        <option value="America/Antigua">America/Antigua</option>
        <option value="America/Araguaina">America/Araguaina</option>
        <option value="America/Argentina/Buenos_Aires">America/Argentina/Buenos_Aires</option>
        <option value="America/Argentina/Catamarca">America/Argentina/Catamarca</option>
        <option value="America/Argentina/Cordoba">America/Argentina/Cordoba</option>
        <option value="America/Argentina/Jujuy">America/Argentina/Jujuy</option>
        <option value="America/Argentina/La_Rioja">America/Argentina/La_Rioja</option>
        <option value="America/Argentina/Mendoza">America/Argentina/Mendoza</option>
        <option value="America/Argentina/Rio_Gallegos">America/Argentina/Rio_Gallegos</option>
        <option value="America/Argentina/Salta">America/Argentina/Salta</option>
        <option value="America/Argentina/San_Juan">America/Argentina/San_Juan</option>
        <option value="America/Argentina/San_Luis">America/Argentina/San_Luis</option>
        <option value="America/Argentina/Tucuman">America/Argentina/Tucuman</option>
        {/* Add more options for other time zones and cities here */}
      </select>
    </div>
  );
}

export default Home;