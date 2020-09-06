package br.com.promocaodiaria.integrador.query

class UsuarioSelect {
	
	public static final String select_usuario = """
		SELECT
			username,
			password,
			enabled
		FROM
			config
		WHERE
			username = ?
	"""
	
	public static final String select_authority = """
		SELECT
			username,
			authority
		FROM
			config
		WHERE
			username = ?
	"""
}
