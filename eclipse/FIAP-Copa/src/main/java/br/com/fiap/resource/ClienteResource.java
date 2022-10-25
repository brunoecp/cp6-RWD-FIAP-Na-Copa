package br.com.fiap.resource;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.fiap.BO.ClienteBO;
import br.com.fiap.TO.ClienteTO;

@Path("/login")
public class ClienteResource {

	ClienteBO cb = new ClienteBO();
	
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response loginUsuario(ClienteTO usuario) {
		
		return Response
		.status(200)
		.entity(cb.logar(usuario))
		.build();
	}
	
}

