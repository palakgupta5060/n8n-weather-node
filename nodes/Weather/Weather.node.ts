import {
	NodeConnectionTypes,
	type INodeExecutionData,
	type IExecuteFunctions,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';

export class Weather implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Weather',
		name: 'weather',
		icon: 'file:weather.svg',
		group: ['transform'],
		version: 1,
		description: 'Get weather information',
		defaults: {
			name: 'Weather',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		properties: [
	{
		displayName: 'City',
		name: 'city',
		type: 'string',
		default: '',
		placeholder: 'e.g. Delhi',
		required: true,
		description: 'Enter the city name',
	},
],
	};
   async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {

	const city = this.getNodeParameter('city', 0) as string;

	// Step 1: Get coordinates
	const geoData = await this.helpers.httpRequest({
		method: 'GET',
		url: 'https://geocoding-api.open-meteo.com/v1/search',
		qs: {
			name: city,
			count: 1,
			language: 'en',
			format: 'json',
		},
		json: true,
	});

	if (!geoData.results || geoData.results.length === 0) {
		throw new Error(`City "${city}" not found`);
	}

	const location = geoData.results[0];

	// Step 2: Get weather
	const weather = await this.helpers.httpRequest({
		method: 'GET',
		url: 'https://api.open-meteo.com/v1/forecast',
		qs: {
			latitude: location.latitude,
			longitude: location.longitude,
			current: 'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code',
		},
		json: true,
	});

	return [[
		{
			json: {
				city: location.name,
				country: location.country,
				latitude: location.latitude,
				longitude: location.longitude,

				temperature: weather.current.temperature_2m,
				humidity: weather.current.relative_humidity_2m,
				windSpeed: weather.current.wind_speed_10m,
				weatherCode: weather.current.weather_code,
			},
		},
	]];
}
}