package br.com.fiap.teste;

import br.com.fiap.BO.ClienteBO;
import br.com.fiap.TO.ClienteTO;

public class ClienteTeste {

	public static void main(String[] args) {
		
	
	ClienteBO cb = new ClienteBO();
	ClienteTO ct = new ClienteTO("ale", "xandre","pf0670","alexandre");
	
	System.out.println("Resposta: " + cb.logar(ct).getNome());
	}
}
