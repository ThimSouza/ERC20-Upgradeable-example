// SPDX-License-Identifier: MIT
pragma solidity = 0.7.6;

import {ERC20Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";



contract SimpleTokenUpgradeable is OwnableUpgradeable, ERC20Upgradeable {

    function initialize(string memory name_,  string memory symbol_) internal initializer {
        __ERC20_init_unchained(name_, symbol_);
        __Ownable_init_unchained();
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external onlyOwner {
        _burn(from, amount);
    }
}