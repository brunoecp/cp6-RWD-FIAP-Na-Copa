package br.com.fiap.BO;

import br.com.fiap.DAO.ClienteDAO;
import br.com.fiap.TO.ClienteTO;

public class ClienteBO {

	 ClienteDAO cd = null;
	
	public ClienteTO logar(ClienteTO u){
		cd = new ClienteDAO();
		return cd.loginDAO(u);
	}
}
