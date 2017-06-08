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
		.when('/turmasOfertadas', {
			templateUrl: 'views/matricula/turmas-ofertadas.html',
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
			redirectTo: '/login'
		});
});


app.controller('pageController', ['$scope', 'alunosService', '$location', function ($scope, alunosService, $location) {
	$scope.logout = function() {
		alunosService.logout();
	}

	
	$scope.getPath = function() {
		return $location.path();
	}
	

}]);

app.controller('loginController', ['$scope','alunosService', function ($scope, alunosService) {
	$scope.logar = function(user) {

		if (user.matricula != null && user.senha != null) {

			alunosService.validaLogin(user);
			
			if (alunosService.validaLogin(user)) {
				$scope.logado = 1;
			} else {
				$scope.logado = 0;
			}
		} else {
			alert("Erro");
		}
		
	}
}]);

app.controller('homeController', ['$scope','$http', function ($scope, $http) {
	
	var url = "http://freegeoip.net/json/";

  	$http.get(url).then(function(response) {
    	$scope.ip = response.data.ip;
  	});
}]);

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

app.service('alunosService', function ($rootScope, $location, $http, $localStorage) {
	
	$rootScope.alunos = [];

	$http.get('data/alunos.json')
		.then(function(response) {
			$rootScope.alunos = response.data.alunos;
		});

	this.validaLogin = function(user) {
		
		$localStorage.usuarioLogado = null;

		angular.forEach($rootScope.alunos, function(value, index) {
			if(value.matricula == user.matricula &&
				value.senha == user.senha) {
				$rootScope.usuarioLogado = value;
				$location.path('/home');
			}
		});

		$localStorage.usuarioLogado = $rootScope.usuarioLogado;
	}

	this.logout = function() {
		$rootScope.usuarioLogado = null;
		$localStorage.usuarioLogado = null;
		$location.path('/login');
	}

	this.getAlunos = function() {
		return $rootScope.alunos;
	}
});

app.run(function ($rootScope, $location, $localStorage) {

	$rootScope.usuarioLogado = $localStorage.usuarioLogado;

	var rotasBloqueadasAlunosNaoLogados = [
		'/home', '/cadastro', '/historico', '/curriculo',
		'/turmas', '/turmasOfertadas', '/matricularDisciplina',
		'/calendarioCampus', '/calendarioCurso', '/estagios',
		'/trancamento', '/desvinculo', '/alterarSenha'];
	
	var rotasBloqueadasAlunosLogados = [];

	$rootScope.$on('$locationChangeStart', function() {

		if ($rootScope.usuarioLogado == null &&
			rotasBloqueadasAlunosNaoLogados.indexOf($location.path()) != -1) {

			$location.path('/login');
		} 
	});
});