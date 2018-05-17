import { InMemoryDbService } from 'angular-in-memory-web-api';
export class ApiProjectMockService implements InMemoryDbService {
	createDb() {
		const employes = [
			{
				id: 1,
				name: 'Juan Carlos',
				company: 'todo1',
				age: '24',
				birthday: '17/01/2015',
				favoriteColor: 'red',
				project: 'bancolombia'
			},
			{
				id: 2,
				name: 'Pedro',
				company: 'todo1',
				age: '24',
				birthday: '17/01/2015',
				favoriteColor: 'red',
				project: 'bancolombia'
			},
			{
				id: 3,
				name: 'Luis',
				company: 'todo1',
				age: '24',
				birthday: '17/01/2015',
				favoriteColor: 'red',
				project: 'bancolombia'
			},
			{
				id: 4,
				name: 'Ariel',
				company: 'todo1',
				age: '24',
				birthday: '17/01/2015',
				favoriteColor: 'red',
				project: 'bancolombia'
			},
			{
				id: 6,
				name: 'Pepe',
				company: 'todo1',
				age: '24',
				birthday: '17/01/2015',
				favoriteColor: 'red',
				project: 'bancolombia'
			}
		];

		const projects = [
			{
				id: 1,
				name: 'producto base',
				teamSize: 5,
				clientName: 'Todo1'
			},
			{
				id: 2,
				name: 'Davivienda',
				teamSize: 5,
				clientName: 'Todo1'
			},
			{
				id: 3,
				name: 'Bancolombia',
				teamSize: 5,
				clientName: 'Todo1'
			},
			{
				id: 4,
				name: 'banistmo',
				teamSize: 5,
				clientName: 'Todo1'
			}
		];

		return { employes, projects };
	}
}
