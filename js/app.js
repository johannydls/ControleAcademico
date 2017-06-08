var app = angular.module('appUFCG', ['ngRoute',
									 'ngStorage',
									 'angularUtils.directives.dirPagination']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'homeController'
		})
		.when('/cadastro', {
			templateUrl: 'views/info/cadastro.html',
			controller: 'cadastroController'
		})
		.when('/cadastro/editar', {
			templateUrl: 'views/info/editar.html',
			controller: 'cadastroEditController'
		})
		.when('/historico', {
			templateUrl: 'views/info/historico.html',
			controller: 'historicoController'
		})
		.when('/curriculo', {
			templateUrl: 'views/info/curriculo.html',
			controller: 'curriculoController'
		})
		.when('/horario', {
			templateUrl: 'views/info/horario.html',
			controller: 'horarioController'
		})
		.when('/turmas', {
			templateUrl: 'views/info/turmas-em-curso.html',
			controller: 'turmasEmCursoController'
		})
		.when('/disciplinasOfertadas', {
			templateUrl: 'views/matricula/disciplinas-ofertadas.html',
			controller: 'turmasOfertadasController'
		})
		.when('/matricularDisciplina', {
			templateUrl: 'views/matricula/matricular-disciplina.html',
			controller: 'matricularController'
		})
		.when('/calendarioCampus', {
			templateUrl: 'views/matricula/calendario-campus.html',
			controller: 'calendarioCampusController'
		})
		.when('/calendarioCurso', {
			templateUrl: 'views/matricula/calendario-curso.html',
			controller: 'calendarioCursoController'
		})
		.when('/estagios', {
			templateUrl: 'views/diversos/estagios.html',
			controller: 'estagiosController'
		})
		.when('/trancamento', {
			templateUrl: 'views/diversos/trancamento.html',
			controller: 'trancamentoController'
		})
		.when('/desvinculo', {
			templateUrl: 'views/diversos/desvinculo.html',
			controller: 'desvinculoController'
		})
		.when('/alterarSenha', {
			templateUrl: 'views/usuario/alterar-senha.html',
			controller: 'alterarSenhaController'
		})
		.when('/ajuda', {
			templateUrl: 'views/usuario/ajuda.html',
			controller: 'ajudaController'
		})
		.when('/acessoNegado', {
			templateUrl: 'views/acesso-negado.html',
			controller: 'acessoNegadoController'
		})
		.otherwise({ 
			redirectTo: '/home'
		});
});

app.controller('pageController', function ($scope) {
	
});

app.controller('loginController', function ($scope) {

});

app.controller('homeController', function ($scope) {

});

app.controller('cadastroController', function ($scope) {

});

app.controller('cadastroEditController', function ($scope) {

});

app.controller('historicoController', function ($scope) {

});

app.controller('curriculoController', function ($scope) {

});

app.controller('horarioController', function ($scope) {

});

app.controller('turmasEmCursoController', function ($scope) {

});

app.controller('turmasOfertadasController', function ($scope) {

});

app.controller('matricularController', function($scope) {

});

app.controller('calendarioCampusController', function ($scope) {

});

app.controller('calendarioCursoController', function ($scope) {

});

app.controller('estagiosController', function ($scope) {

});

app.controller('trancamentoController', function ($scope) {

});

app.controller('desvinculoController', function ($scope) {

});

app.controller('alterarSenhaController', function ($scope) {

});

app.controller('ajudaController', function ($scope) {

});

app.controller('acessoNegadoController', function ($scope) {

});

app.service('usuariosService', function ($rootScope, $location, $localStorage, $http) {
	
	this.validaLogin = function(user) {
		
	}
});