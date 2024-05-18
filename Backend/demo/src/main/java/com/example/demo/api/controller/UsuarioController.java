package com.example.demo.api.controller;

import com.example.demo.domain.common.UsuarioRoute;
import com.example.demo.domain.dto.UsuarioDTO;
import com.example.demo.domain.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = UsuarioRoute.API)

public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping(value = UsuarioRoute.SAVE_USUARIO)
    public UsuarioDTO save(@RequestBody UsuarioDTO usuarioDTO){
        return usuarioService.save(usuarioDTO);
    }

    @GetMapping(value = UsuarioRoute.SAVE_USUARIO)
    public List<UsuarioDTO> get(){
        return usuarioService.getAll();
    }
}
