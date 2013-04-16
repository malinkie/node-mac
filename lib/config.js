module.exports = {
  pattern: /(([0-9a-f]{1,2}(:|-)){5}[0-9a-f]{1,2})|([0-9a-f]{4}.){2}[0-9a-f]{4}/i,
  commands: {
    darwin: "networksetup -listallhardwareports",
    freebsd: "ifconfig -a",
    linux: "ifconfig -a",
    sunos: "/sbin/ifconfig -a",
    win32: "ifconfig /all"
  }
}
